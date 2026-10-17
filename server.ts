import express from 'express';
import { createServer as createViteServer } from 'vite';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);
const app = express();
app.use(express.json());

// API endpoint to push committed code to GitHub securely
app.post('/api/git-push', async (req, res) => {
  const { token, repoUrl } = req.body;
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ error: 'Token do GitHub não fornecido.' });
  }

  const cleanToken = token.trim();
  const targetRepo = (repoUrl && typeof repoUrl === 'string') 
    ? repoUrl.trim() 
    : 'https://github.com/douglassm84-svg/lavanderiadrsabao.git';

  // Construct authenticated URL
  const authenticatedUrl = targetRepo.replace(
    /^https:\/\//i,
    `https://${encodeURIComponent(cleanToken)}@`
  );

  try {
    // Push main branch to remote
    const { stdout, stderr } = await execPromise(`git push ${authenticatedUrl} main --force`);
    return res.json({
      success: true,
      message: 'Código enviado com sucesso para o GitHub!',
      stdout,
      stderr
    });
  } catch (err: any) {
    // Sanitize error message to ensure token is never exposed
    let safeError = err.message || 'Erro ao realizar o git push.';
    if (cleanToken) {
      safeError = safeError.split(cleanToken).join('***');
    }
    return res.status(500).json({
      success: false,
      error: safeError
    });
  }
});

// Mount Vite middleware for dev mode
async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  const port = process.env.PORT || 3000;
  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Server ready on http://0.0.0.0:${port}`);
  });
}

startServer();

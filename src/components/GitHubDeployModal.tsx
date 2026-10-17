import React, { useState } from 'react';
import { 
  GitBranch, 
  Github, 
  Key, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  X,
  UploadCloud,
  Check
} from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [repoUrl, setRepoUrl] = useState('https://github.com/douglassm84-svg/lavanderiadrsabao.git');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handlePush = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) {
      setStatus('error');
      setFeedbackMessage('Por favor, insira o seu token de acesso pessoal do GitHub.');
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/git-push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token.trim(),
          repoUrl: repoUrl.trim()
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFeedbackMessage('Sucesso! O repositório foi sincronizado e o código da branch main já está publicado no seu GitHub.');
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Falha ao autenticar ou enviar para o GitHub. Verifique se o token possui a permissão "repo".');
      }
    } catch (err: any) {
      setStatus('error');
      setFeedbackMessage('Erro de conexão ao executar o push: ' + (err.message || 'Tente novamente'));
    } finally {
      setIsLoading(false);
    }
  };

  const copyRepoUrl = () => {
    navigator.clipboard.writeText(repoUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#053749] text-white p-5 flex items-center justify-between border-b border-[#085d7b]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2">
                Conectar com GitHub
                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-mono">
                  main
                </span>
              </h2>
              <p className="text-xs text-cyan-200">
                Sincronize o código do site Dr. Sabão diretamente no seu repositório
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-cyan-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handlePush} className="p-6 space-y-4">
          
          {/* Security Banner */}
          <div className="flex items-start gap-2.5 p-3 bg-cyan-50 border border-cyan-200 rounded-xl text-xs text-[#053749]">
            <ShieldCheck className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Segurança e .env protegido:</span> Seus arquivos sensíveis (como <code>.env</code>) foram ignorados pelo <code>.gitignore</code> e não serão enviados. Somente o código limpo e o <code>.env.example</code> serão publicados.
            </div>
          </div>

          {/* Repository Target Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center justify-between">
              <span>Repositório de Destino:</span>
              <button 
                type="button" 
                onClick={copyRepoUrl}
                className="text-cyan-700 hover:text-cyan-900 text-[11px] font-medium flex items-center gap-1 cursor-pointer"
              >
                {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : null}
                {isCopied ? 'Copiado!' : 'Copiar URL'}
              </button>
            </label>
            <div className="relative">
              <input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="w-full text-xs font-mono bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="https://github.com/usuario/repo.git"
              />
            </div>
          </div>

          {/* Token Input Field (Requested by User) */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="github-token-input" className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-[#f97d38]" />
                Campo para Inserir o Token do GitHub:
              </label>
              <a
                href="https://github.com/settings/tokens/new"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-cyan-700 hover:text-cyan-900 hover:underline flex items-center gap-1 font-medium"
              >
                Gerar token no GitHub <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="relative">
              <input
                id="github-token-input"
                type={showToken ? 'text' : 'password'}
                autoFocus
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Cole seu token aqui (ex: ghp_... ou github_pat_...)"
                className="w-full text-sm font-mono bg-white border-2 border-cyan-500/50 focus:border-cyan-600 rounded-xl px-3.5 py-2.5 pr-10 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-3 focus:ring-cyan-100 shadow-xs"
              />
              <button
                type="button"
                onClick={() => setShowToken(!showToken)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                title={showToken ? 'Ocultar token' : 'Exibir token'}
              >
                {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              O token deve conter a permissão <span className="font-semibold text-slate-700">repo</span> marcada. O token é usado apenas para autenticar o push e não é armazenado.
            </p>
          </div>

          {/* Feedback Messages */}
          {status === 'success' && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{feedbackMessage}</p>
                <a 
                  href="https://github.com/douglassm84-svg/lavanderiadrsabao" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-1.5 inline-flex items-center gap-1 text-emerald-700 hover:underline font-bold"
                >
                  Abrir repositório no GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Erro ao enviar:</span> {feedbackMessage}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading || !token.trim()}
              className="px-5 py-2.5 bg-[#f97d38] hover:bg-[#ea580c] disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Enviando para o GitHub...</span>
                </>
              ) : (
                <>
                  <UploadCloud className="w-4 h-4" />
                  <span>Fazer Push para o GitHub</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Alternative Instruction Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Também pode colar o token diretamente no chat do AI Studio</span>
          <span className="font-mono text-cyan-800 font-semibold">git push origin main</span>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import workflowDesigner from '../assets/imgs/AsetoDesigner.png';

const alt = 'Aseto Workflow Designer: a drag-and-drop canvas of connected conversation and tool nodes';

function WorkflowFigure() {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoomed(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed]);

  return (
    <figure className="m-0 mt-3 flex flex-col gap-2.5">
      <button
        type="button"
        onClick={() => setZoomed(true)}
        aria-label="Enlarge Workflow Designer screenshot"
        className="group block border border-rule bg-card p-2"
      >
        <img src={workflowDesigner} alt={alt} className="block w-full transition-opacity group-hover:opacity-90" />
      </button>
      <figcaption className="text-[15px] leading-normal text-muted">
        <b className="text-ink">Workflow Designer</b> - a visual, drag-and-drop editor I built so clients can
        design their own AI agents by connecting conversation and tool nodes, using built-in or custom tools.
      </figcaption>

      {zoomed &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Workflow Designer screenshot"
            onClick={() => setZoomed(false)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-4 sm:p-8"
          >
            <img src={workflowDesigner} alt={alt} className="max-h-full max-w-full object-contain" />
            <button
              type="button"
              autoFocus
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 border border-white/60 bg-black/60 px-3 py-1.5 font-mono text-[13px] text-white"
            >
              Close ×
            </button>
          </div>,
          document.body,
        )}
    </figure>
  );
}

export default WorkflowFigure;

import React from 'react';
import logo from '../assets/logo.png';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between p-8 font-sans">
            <header className="flex justify-between items-center max-w-6xl w-full mx-auto py-4 border-b border-slate-800 pb-0">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-20 w-auto" />
                    <span className="text-2xl font-bold tracking-tight text-cyan-400">MCMF</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto my-auto text-center py-16">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    Mewujudkan <span className="text-cyan-400">Partisipasi Bermakna</span> di Era Regulasi Digital
                </h1>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    Platform pengawasan legislasi berbasis AI untuk membedah rancangan undang-undang, 
                    menjamin hak publik untuk didengar dan mendapatkan penjelasan secara transparan.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a 
                        href="https://honey-skid-40792113.figma.site/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg shadow-lg transition"
                    >
                        Buka Prototipe Interaktif (Figma)
                    </a>
                </div>
            </main>

            <footer className="text-center text-xs text-slate-500 border-t border-slate-800 pt-6">
                &copy; 2026 RakyatKritis &bull; Submission UINIC 8.0
            </footer>
        </div>
    );
}
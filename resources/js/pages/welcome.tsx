export default function Welcome() {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-slate-900 p-8 font-sans text-slate-100">
            <header className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-slate-800 py-4 pb-0">
                <div className="flex items-center space-x-3">
                    <img src="/images/logo.png" alt="Logo" className="h-20 w-auto" />
                    <span className="text-2xl font-bold tracking-tight text-cyan-400">MCMF</span>
                </div>
            </header>

            <main className="mx-auto my-auto max-w-4xl py-16 text-center">
                <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
                    Mewujudkan <span className="text-cyan-400">Partisipasi Bermakna</span> di Era Regulasi Digital
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
                    Platform pengawasan legislasi berbasis AI untuk membedah rancangan undang-undang, menjamin hak publik untuk didengar dan
                    mendapatkan penjelasan secara transparan.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a
                        href="https://honey-skid-40792113.figma.site/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:bg-cyan-400"
                    >
                        Buka Prototipe Interaktif (Figma)
                    </a>
                </div>
            </main>

            <footer className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
                &copy; 2026 RakyatKritis &bull; Submission UINIC 8.0
            </footer>
        </div>
    );
}

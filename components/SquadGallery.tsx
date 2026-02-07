import { motion } from "framer-motion";

const SquadGallery = () => {
    const squadItems = [
        "team-vertical-1", "team-vertical-2"
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4 md:p-8 text-center h-full max-h-screen overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-serif text-[#d4af37] mb-2 uppercase tracking-wide shrink-0">
                THE SQUAD
            </h2>
            <p className="text-lg text-white/60 mb-6 font-light max-w-2xl shrink-0">
                Ardo, Uzma, Amirah, & Diyana. <br />
                <span className="text-white italic">Cultural distinctness unified by logic.</span>
            </p>

            <div className="flex gap-8 md:gap-12 justify-center w-full max-w-5xl shrink min-h-0">
                {squadItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="h-[50vh] max-h-[500px] aspect-[9/16] bg-white/5 border border-white/10 rounded-sm relative overflow-hidden group hover:border-[#d4af37]/40 transition-colors"
                    >
                        <img
                            src={`/assets/${item}.webp`}
                            alt={item}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors duration-500">
                            <div className="text-[#d4af37]/30 text-6xl font-serif">{index + 1}</div>
                        </div>
                        <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#d4af37] font-serif italic text-sm tracking-widest">{item}.webp</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SquadGallery;

import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-white py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-foreground mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Principal Sponsors - 2 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-foreground mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-foreground font-normal text-xs">Engr. Edwin Domingo</p>
              <p className="text-foreground font-normal text-xs">Mrs. Lucila Domingo</p>
              <p className="text-foreground font-normal text-xs">Mr. Raymond Santos</p>
              <p className="text-foreground font-normal text-xs">Mrs. Glaiza Santos</p>
              <p className="text-foreground font-normal text-xs">Mr. Arthur Macaraig</p>
              <p className="text-foreground font-normal text-xs">Mrs. Reni Rose Macaraig</p>
              <p className="text-foreground font-normal text-xs">Mr. Paul John Yalung</p>
              <p className="text-foreground font-normal text-xs">Mrs. Jennifer Yalung</p>
              <p className="text-foreground font-normal text-xs">Mr. Melvin Aquino</p>
              <p className="text-foreground font-normal text-xs">Mrs. Soleil Aquino</p>
              <p className="text-foreground font-normal text-xs">Mr. Francis Kei Santos</p>
              <p className="text-foreground font-normal text-xs">Mrs. Azusa Miki Santos</p>
              <p className="text-foreground font-normal text-xs">Mr. Jose Emmanuel Santos</p>
              <p className="text-foreground font-normal text-xs">Ms. Jeremiah Ella Santos</p>
              <p className="text-foreground font-normal text-xs">Mr. Jules Isaac Santos</p>
              <p className="text-foreground font-normal text-xs">Ms. Hannah Beatrice Santos</p>
              <p className="text-foreground font-normal text-xs">Fiscal Francis Germar</p>
              <p className="text-foreground font-normal text-xs">Mrs. Kheicielen Germar</p>
              <p className="text-foreground font-normal text-xs">Mr. Jun Hidalgo</p>
              <p className="text-foreground font-normal text-xs">Mrs. Maricel Hidalgo</p>
              <p className="text-foreground font-normal text-xs">Mr. Jeric Alfonso</p>
              <p className="text-foreground font-normal text-xs">Mrs. Josan Alfonso</p>
              <p className="text-foreground font-normal text-xs">Mr. Marcelino Bernardo Jr.</p>
              <p className="text-foreground font-normal text-xs">Mrs. Rose Bernardo</p>
              <p className="text-foreground font-normal text-xs">Mr. Juan Paolo Climacosa</p>
              <p className="text-foreground font-normal text-xs">Dra. Emary Climacosa</p>
              <p className="text-foreground font-normal text-xs">Mr. Juanito Leabres</p>
              <p className="text-foreground font-normal text-xs">Mrs. Maria Riza Leabres</p>
            </div>
          </div>

          {/* Secondary Sponsors */}
          <div>
            <h3 className="font-display italic text-lg text-foreground mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            
            {/* Senior Groomsmen and Senior Bridesmaids - 2 COLUMNS */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div data-testid="section-senior-groomsmen">
                <h4 className="font-bold italic text-xs text-foreground mb-2">Senior Groomsmen</h4>
                <p className="text-foreground font-normal text-xs">Mr. Christopher Bernardo</p>
                <p className="text-foreground font-normal text-xs">Mr. Renato Riel</p>
                <p className="text-foreground font-normal text-xs">Mr. Ryan Cruz</p>
                <p className="text-foreground font-normal text-xs">Mr. Edmond Alcañices</p>
              </div>
              <div data-testid="section-senior-bridesmaids">
                <h4 className="font-bold italic text-xs text-foreground mb-2">Senior Bridesmaids</h4>
                <p className="text-foreground font-normal text-xs">Mrs. Evangeline Bernardo</p>
                <p className="text-foreground font-normal text-xs">Mrs. Jonalyn Riel</p>
                <p className="text-foreground font-normal text-xs">Ms. Rochell Bernardo</p>
                <p className="text-foreground font-normal text-xs">Mrs. Annaliza Alcañices</p>
              </div>
            </div>

            {/* Junior Groomsmen and Junior Bridesmaids - 2 COLUMNS */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div data-testid="section-junior-groomsmen">
                <h4 className="font-bold italic text-xs text-foreground mb-2">Junior Groomsmen</h4>
                <p className="text-foreground font-normal text-xs">Engr. John Paul Adrian Bernardo</p>
                <p className="text-foreground font-normal text-xs">Mr. Julius Nicolai Bernardo</p>
                <p className="text-foreground font-normal text-xs">Mr. John Nico Riel</p>
                <p className="text-foreground font-normal text-xs">Mr. Angel Ryan Dominic Cruz</p>
                <p className="text-foreground font-normal text-xs">Mr. Mharc Angelo Alcañices</p>
                <p className="text-foreground font-normal text-xs">Mr. Ian Mathew Alcañices</p>
                <p className="text-foreground font-normal text-xs">Mr. Julius Ceasar Alcañices</p>
              </div>
              <div data-testid="section-junior-bridesmaids">
                <h4 className="font-bold italic text-xs text-foreground mb-2">Junior Bridesmaids / Flower Ladies</h4>
                <p className="text-foreground font-normal text-xs">Ms. Lois Angel Cruz</p>
                <p className="text-foreground font-normal text-xs">Ms. Jade Marielle Bernardo</p>
                <p className="text-foreground font-normal text-xs">Ms. Francess Khylie Germar</p>
              </div>
            </div>

            {/* Little Groom and Little Bride - 2 COLUMNS */}
            <div className="grid grid-cols-2 gap-8">
              <div data-testid="section-little-groom">
                <h4 className="font-bold italic text-xs text-foreground mb-2">Little Groom</h4>
                <p className="text-foreground font-normal text-xs">Nikolaj Levine Aquino</p>
              </div>
              <div data-testid="section-little-bride">
                <h4 className="font-bold italic text-xs text-foreground mb-2">Little Bride</h4>
                <p className="text-foreground font-normal text-xs">Jan Jemaree Valentin</p>
              </div>
            </div>
          </div>

          {/* Wedding Officiant - Single column */}
          <div data-testid="section-officiant">
            <p className="text-foreground font-normal text-xs">Fr. Erasmo P. Lapig</p>
            <h4 className="font-display italic text-sm text-foreground mt-1">Officiating Priest</h4>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;

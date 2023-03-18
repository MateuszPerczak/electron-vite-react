import { motion } from "framer-motion";
import { FC } from "react";

const App: FC = (): JSX.Element => {
  return (
    <main>
      <motion.div initial={{ scale: 0, x: -100 }} animate={{ scale: 1, x: 0 }}>
        HELLO SOURCE MAPS
      </motion.div>
    </main>
  );
};

export default App;

import Image from "next/legacy/image";
import { motion } from "framer-motion";

const Invitation = () => {
  return (
    <>
      <div id="invitation" className="w-full h-full pt-20 sm:pt-52">
        <div className="leading-relaxed text-center antialiased">
          <h2 className="mb-3 text-4xl sm:text-6xl text-orange-800/80 invitation tracking-wide">
            Assalamualaikum Wr. Wb.
          </h2>
          <p className="text-md sm:text-xl text-[#666]">
            Dengan menyebut nama Allah SWT yang Maha Pengasih dan Maha
            Penyayang, kami dengan senang hati ingin mengundang
            Bapak/Ibu/Saudara/Saudari dan berbagi kegembiraan pada pernikahan
            kami
          </p>
        </div>
        <div className="w-full grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 pt-14">
          <div className="w-full h-full text-center mb-6 sm:mb-0">
            <Image
              src="/img/man.png"
              alt="profile heri"
              width={300}
              height={300}
              layout="responsive"
              objectFit="contain"
              priority
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              h3
              className="text-4xl text-orange-800/90 font-semibold py-2 invitation"
            >
              Ridwan Kurniawan
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#666] text-lg font-semibold text-orange-900/90"
            >
              Putra Sulung dari Bpk.H.Djaja Sukmara dan Ibu Melisa Sukmara
            </motion.p>
          </div>
          <div className="w-full h-full text-center rounded-full">
            <Image
              src="/img/woman.png"
              alt="profile devi"
              width={300}
              height={300}
              layout="responsive"
              objectFit="contain"
              priority
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={false}
              h3
              className="text-4xl text-orange-800/90 font-semibold py-2 invitation"
            >
              Winda Margaretha
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#666] text-lg font-semibold text-orange-900/90"
            >
              Putra Bungsu dari Bpk.Lionel Margareth dan Ibu Liana Margareth
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invitation;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { motion } from "framer-motion";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

import Link from "next/link";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <div id="gallery" className="w-full h-full pt-40 relative">
        <div className="fixed -z-50 left-0 sm:-left-80 top-20 sm:top-52 w-full h-full rotate-180 opacity-75">
          <Image
            src="/img/ornamen.png"
            alt="ornamen"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="text-center pb-10">
          <h3 className="invitation font-medium text-orange-900 text-4xl sm:text-6xl">
            Prewedding Gallery
          </h3>
        </div>
        <LightGallery
          mode="lg-fade"
          onInit={onInit}
          speed={300}
          plugins={[lgThumbnail, lgZoom]}
          addClass={true}
          isMobile
          elementClassNames="grid grid-cols-2 sm:grid-cols-3 gap-1 group "
        >
          <Link href="/img/asset2.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hover:scale-105 shadow-lg shadow-black/10 "
            >
              <Image
                className="img-responsive rounded"
                src="/img/asset2.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/img/asset1.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                className="img-responsive rounded"
                src="/img/asset1.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/img/asset1.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/img/asset1.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/img/asset2.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/img/asset2.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/img/asset3.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/img/asset2.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/img/asset3.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/img/asset2.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/img/asset1.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/img/asset1.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/img/asset3.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/img/asset3.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
        </LightGallery>
      </div>
    </>
  );
};

export default Gallery;

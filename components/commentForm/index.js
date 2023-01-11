import axios from "axios";
import { useForm } from "react-hook-form";
import moment from "moment";
import Swal from "sweetalert2";
import { ImPushpin } from "react-icons/im";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CommentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  /**
   * PRODUCTION
   * DEV
   */

  const formSubmit = async ({ name, message, presence, attend }) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_PRODUCTION_POST}/api/comment`, {
        name: name,
        message: message,
        presence: presence,
        attend: attend,
        createdAt: moment().format("Do MMMM YYYY, h:mm a"),
      })
      .then(() => {
        setLoading(true);

        setTimeout(() => {
          Swal.fire({
            title: "Terkirim",
            icon: "success",
            text: "Terima Kasih atas Partisipasinya",
            showConfirmButton: false,
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
          }),
            reset();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Kesalahan Input Nama atau Pesan, Ulangi menggunakan Nama lengkap dan Minimum 10 Karakter Ucapan",
        });
      });
  };
  /**
   * PRODUCTION
   * DEV
   */

  const getUser = async () => {
    const req = await axios.get(
      `${process.env.NEXT_PUBLIC_PRODUCTION_GET}/api/hadeuh`
    );
    const post = await req.data;
    setPosts(post);
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 8000);
    return () =>
      clearInterval(() => {
        setLoading(true);
      });
  }, []);

  return (
    <>
      <div
        id="wish"
        className="w-full backdrop-blur shadow-lg shadow-black/10 h-full mt-10 py-10 sm:my-40  px-2 bg-amber-200/30"
      >
        <h3 className="text-4xl text-amber-800 mx-auto sm:text-6xl invitation text-center border-b border-amber-900 pb-2 w-fit mb-10">
          Tinggalkan Pesan dan Kehadiran
        </h3>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="w-full px-0 sm:px-20 flex flex-col "
        >
          <input
            type="text"
            placeholder="Nama"
            className="w-full py-2 px-4  rounded text-[#777] focus:outline-amber-800  "
            {...register("name", { required: true })}
          />

          <div className="pt-3">
            <textarea
              name=""
              cols="100"
              rows="10"
              className="w-full p-4  rounded text-[#777] focus:outline-amber-800"
              placeholder="Pesan . . ."
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div className="py-1 sm:py-3">
            <p className="bg-white text-center py-1 text-amber-900 rounded">
              Kehadiran
            </p>
            <select
              className="w-full p-2 text-[#777] focus:outline-amber-800 "
              {...register("presence", { required: true })}
            >
              <option value="">Select...</option>
              <option value="hadir">Hadir</option>
              <option value="tidak hadir">Tidak Hadir</option>
            </select>
          </div>
          <div className="py-1 sm:py-3">
            <p className="bg-white text-center py-1 text-amber-900 rounded">
              Berapa Orang yang Hadir
            </p>
            <div className="flex items-center  border  bg-white">
              <input
                type="number"
                placeholder="0"
                className="w-full p-2 rounded text-[#333] focus:outline-amber-800 "
                {...register("attend", { required: true })}
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded py-2 px-6 mt-3 bg-amber-800 hover:bg-amber-900 transition-all duration-100 ease-linear hover:text-white text-[#E7E7E7]"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <p>loading</p>
                <div className="animate-spin border-2 border-white border-b-white/20 w-3 h-3 rounded-full"></div>
              </div>
            ) : (
              <p>Kirim</p>
            )}
          </button>
        </form>
      </div>
      <div className="w-full h-full pb-20 backdrop-blur shadow-lg shadow-black/10  pt-4 px-2 sm:px-6 bg-amber-200/20 my-14 rounded relative">
        <h2 className=" px-1 text-orange-900 text-md">
          1 -
          <span className={posts.length < 10 ? "visible" : "hidden"}> 0</span>
          {posts.length}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4 antialiased bg-white/70 p-4 shadow-lg mt-6"
        >
          <div className="items-center border-b border-amber-900/40 pb-1 mb-4">
            <div className="flex items-center justify-between">
              <div className=" flex items-center gap-1">
                <ImPushpin className="text-zinc-700" />
                <p className="text-amber-800/80 text-lg sm:text-xl">
                  Ryza.inkara.id
                </p>
              </div>
            </div>
            <em className="text-sm text-[#989898]">
              Monday, January 9, 2023 9:52 AM
            </em>
          </div>
          <p className="mb-6 text-[#555] text-lg">
            Happy wedding Ridwan & Winda, semoga menjadi keluarga yang Sakinah,
            Mawadah & Warohmah.. <br /> Amiin .. 🤲{" "}
          </p>
        </motion.div>
        <div className="flex flex-col-reverse ">
          {posts.map((data, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              key={data._id}
              className="antialiased mb-4 bg-white/70 p-4 relative shadow-lg"
            >
              <div className="items-center border-b border-amber-900/40 pb-1 mb-4">
                <div className="flex flex-row-reverse items-center justify-between">
                  <span className="text-[#888] relative top-2">{i + 1}</span>
                  <p className="text-amber-800/80 capitalize text-lg sm:text-xl">
                    {data.name}
                  </p>
                  <em
                    className={
                      data.presence === "hadir"
                        ? "bg-green-500 capitalize p-1 text-white absolute top-0 right-0 rounded-bl-md text-sm"
                        : "bg-red-400 capitalize p-1 text-white absolute top-0 right-0 rounded-bl-md text-sm"
                    }
                  >
                    {data.presence}
                  </em>
                </div>
                <em className="text-sm text-[#989898]">{data.createdAt}</em>
              </div>
              <p className="mb-6 text-[#555] text-lg">{data.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentForm;

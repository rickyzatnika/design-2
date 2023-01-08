import { useState, useEffect } from "react";
import Select from "react-select";

const options = [
  { value: "hadir", label: "Hadir" },
  { value: "tidak hadir", label: "Tidak Hadir" },
];

const CommentForm = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setShow(true);
  };

  useEffect(() => {
    if (value === "") {
      setShow(false);
    }
  }, [value]);

  return (
    <>
      <div id="wish" className="w-full h-full pt-10 sm:py-40">
        <h3 className="text-4xl text-amber-800 mx-auto sm:text-6xl invitation text-center border-b border-amber-900 pb-2 w-fit mb-10">
          Tinggalkan Pesan dan Kehadiran
        </h3>
        <form className="w-full px-0 sm:px-20 flex flex-col">
          <input
            type="text"
            placeholder="Nama"
            className="w-full py-2 px-4 focus:outline-none rounded text-[#777]"
          />
          <div className="pt-3">
            <textarea
              name=""
              cols="100"
              rows="10"
              className="w-full p-4 focus:outline-none rounded text-[#777]"
              placeholder="Pesan . . ."
              onChange={handleChange}
            ></textarea>
          </div>
          {show && (
            <>
              <div className="py-1 sm:py-3">
                <p className="bg-white text-center py-1 text-amber-900 rounded">
                  Kehadiran
                </p>
                <Select
                  options={options}
                  className="border-none focus:outline-none focus:ring-0"
                />
              </div>
              <div className="py-1 sm:py-3">
                <p className="bg-white text-center py-1 text-amber-900 rounded">
                  Jumlah Orang yang Hadir
                </p>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full p-2 border border-gray-300 focus:outline-none rounded text-[#777]"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="rounded py-2 px-6 mt-3 bg-amber-800 hover:bg-amber-900 transition-all duration-100 ease-linear hover:text-white text-[#E7E7E7]"
          >
            Kirim
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentForm;

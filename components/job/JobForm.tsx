import { JopProps } from "@/interfaces";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Icons } from "@/constants";
import Button from "@/components/common/Button";
import { useStateContext } from "@/components/context/ContextProvider";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JobForm = ({ job }: { job: any }) => {
  const { isOpen, setIsOpen } = useStateContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<JopProps>({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    coverLetter: "",
    resume: null as File | null,
  });

  console.log(isOpen);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleClearFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setFormData((prev) => ({ ...prev, resume: null }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting application for job:", job.job_title);
    console.log(formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className=" lg:p-20 coolinput mt-4 flex flex-col gap-8 bg-white h-screen  "
    >
      <div
        className="flex gap-4  bg-white"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <Image src={Icons.back_arrow} alt="Back Arrow" height={44} width={44} />
      </div>
      <h2 className="text-xl text-[25px] lg:text-[30px] text-gray-600 font-bold">
        Apply for: {job.job_title} at{" "}
        <span className="text-[#56b8b5]">{job.company}</span>
      </h2>

      <input
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
        required
        type="text"
        className="border input p-2 w-full"
      />

      <input
        name="email"
        placeholder="Email Address"
        type="email"
        onChange={handleChange}
        required
        className="border input p-2 w-full"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        type="tel"
        onChange={handleChange}
        className="border input p-2 w-full"
      />

      <input
        name="linkedIn"
        placeholder="LinkedIn Profile (optional)"
        onChange={handleChange}
        type="url"
        className="border input p-2 w-full"
      />

      <textarea
        name="coverLetter"
        placeholder="Write a short cover letter"
        onChange={handleChange}
        rows={4}
        typeof="text"
        className="border input p-2 w-full"
      />
      <div className="flex coolinput  gap-4">
        <label className="text">Upload Resume (pdf,.doc,.docx)</label>
        <input
          ref={fileInputRef}
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="border input !p-4 lg:w-[50%] w-full"
          required
        />
        <Button
          onClick={() => handleClearFile()}
          text={"Clear"}
          style={`p-4 ${
            fileInputRef.current && fileInputRef.current.value.length
              ? "bg-red-500"
              : "hidden "
          } text-white  rounded hover:bg-red-600 transition`}
        />
      </div>

      {/* Hidden Fields for Job Info */}
      <input type="hidden" name="job_id" value={job.id} />
      <input type="hidden" name="job_title" value={job.job_title} />

      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Submit Application
      </button>
    </motion.form>
  );
};

export default JobForm;

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";

export default function Form({ blok }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function submitForm(data) {

  }

  return (
    <form
      className="bg-white mx-auto my-6 rounded-xl w-1/3 p-4 shadow space-y-4"
      {...storyblokEditable(blok)}
      onSubmit={handleSubmit(submitForm)}
    >
      {blok.Inputs.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          register={register}
          errors={errors}
        />
      ))}
      <input
        className="w-full flex justify-center py-2 px-4 rounded-md shadow text-sm font-medium text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700"
        type="submit"
      />
    </form>
  );
}
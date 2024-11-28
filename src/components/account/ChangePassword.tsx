import { useForm } from "react-hook-form";
import { useChangePassword } from "../../services/user/mutations";
import { ChangePasswordDto, ChangePasswordSchema } from "../../types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";

const ChangePassword = ({ onSuccess }: { onSuccess: () => void }) => {
  const change = useChangePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordDto>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordDto) => {
    change.mutate(data, {
      onSuccess: () => {
        onSuccess();
      },
    });
  };
  return (
    <form className=" text-center" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="currentPassword" className="block mb-2">
          Current Password :
        </label>
        <input
          type="password"
          id="currentPassword"
          className="w-full bg-primary px-4 py-2 rounded text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          {...register("currentPassword")}
        />
        {errors.currentPassword && (
          <p className="text-red-500 text-sm mt-2">
            {errors.currentPassword.message}
          </p>
        )}
      </div>
      <div className="my-4">
        <label htmlFor="newPassword" className="block mb-2">
          New Password :
        </label>
        <input
          type="password"
          id="newPassword"
          className="w-full bg-primary px-4 py-2 rounded text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          {...register("newPassword")}
        />
        {errors.newPassword && (
          <p className="text-red-500 text-sm mt-2">
            {errors.newPassword.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mb-2">
          Confirm Password :
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full bg-primary px-4 py-2 rounded text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-2">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        className="bg-button text-white px-8 py-4 rounded w-full font-bold disabled:opacity-50 mt-8"
        type="submit"
      >
        Change Password
      </button>
      {change.isError && (
        <p className="text-red-500 text-sm mt-2">{change.error.message}</p>
      )}
    </form>
  );
};

export default ChangePassword;

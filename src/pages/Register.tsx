import { Helmet } from "react-helmet";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../services/auth/mutations";
import { RegisterData, RegisterSchema } from "../types/auth.type";

const Register = () => {
  const { loading, token } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (token) {
    return <p>You are already logged in</p>;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const registerMutation = useRegister();

  const onSubmit = (data: RegisterData) => {
    registerMutation.mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>Register - PokeSwitch</title>
      </Helmet>
      <div className="flex items-center justify-center h-auto container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 p-16 rounded-lg shadow-lg w-full max-w-2xl"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Confirm password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-500 transition-colors"
          >
            Login
          </button>
          {registerMutation.isError && (
            <p className="text-red-500 text-sm mt-2">
              {registerMutation.error.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Register;

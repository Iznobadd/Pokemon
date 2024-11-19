import { useForm } from "react-hook-form";
import { LoginData, LoginSchema } from "../types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../services/auth/mutations";
import { useAuth } from "../context/useAuth";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";

const Login = () => {
  const { loading, token } = useAuth();

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
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const loginMutation = useLogin();

  const onSubmit = (data: LoginData) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <Helmet>
        <title>Login - Pokemon</title>
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

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-500 transition-colors"
          >
            Login
          </button>
          {loginMutation.isError && (
            <p className="text-red-500 text-sm mt-2">
              {loginMutation.error.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;

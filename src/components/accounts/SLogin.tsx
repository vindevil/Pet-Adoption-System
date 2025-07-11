import { PawHubContainer } from "components/layout/Grid/PetCardFlex";
import { Form, Input } from "react-daisyui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-supabase";

import { FetchingButton } from "../layout/Buttons/FetchingButton";

type LoginType = {
  email: string;
  password: string;
};

const SLogin = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, register } = useForm<LoginType>();

  const [{ error, fetching }, signIn] = useSignIn();
  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    const { session, error: signInError } = await signIn(data);

    if (session && !signInError) {
      navigate("/");
    }
  };

  return (
    <PawHubContainer>
      <section className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 shadow-2xl rounded-xl p-6 shadow-primary">
          <h1 className="text-5xl font-bold font-amatic">Login</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full p-4">
              <Form.Label title="Email Address">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Enter Email"
                      bordered
                      type="email"
                      color="primary"
                      className=" flex min-w-[10px] "
                      {...register("email", {
                        required: true,
                        maxLength: 45,
                      })}
                    />
                  )}
                />
              </Form.Label>
            </div>

            <div className="w-full p-4">
              <Form.Label title="Password &ensp;">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Enter Password"
                      bordered
                      color="primary"
                      type="password"
                      className=" flex min-w-[10px] max-w-xs"
                      {...register("password", { required: true })}
                    />
                  )}
                />
              </Form.Label>
              <Link to="/forgot-password">
                <small className="text-error flex justify-end underline pr-1">
                  Forgot password?
                </small>
              </Link>
            </div>

            <FetchingButton fetching={fetching} action="Submit" />
            {error && <small className="text-error">{error.message}</small>}
          </Form>
        </div>
      </section>
    </PawHubContainer>
  );
};

export default SLogin;

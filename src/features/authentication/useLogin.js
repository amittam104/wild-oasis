import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (data) => {
      console.log(data);
      toast.success("You are successfully logged in");
      navigate("/");
    },

    onError: (err) => {
      toast.error(`${err}. Please try again!`);
    },
  });

  return { login, isLoading };
}

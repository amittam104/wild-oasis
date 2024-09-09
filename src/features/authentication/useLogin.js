import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("You are successfully logged in");
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      toast.error(`${err}. Please try again!`);
    },
  });

  return { login, isLoading };
}

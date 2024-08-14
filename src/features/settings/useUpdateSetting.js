import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {updateSetting as UpdateSettingApi} from '../../services/apiSettings'

export function useUpdateSetting(){
    const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: UpdateSettingApi,
    onSuccess: () => {
      toast.success("Setting Successfuly edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {updateSetting, isUpdating}
}
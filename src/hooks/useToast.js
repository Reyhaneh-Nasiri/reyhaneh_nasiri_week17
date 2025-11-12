import { useContext } from "react";
import { ToastContext } from "@/components/context/ToastContext";

export const useModal = () => useContext(ToastContext);

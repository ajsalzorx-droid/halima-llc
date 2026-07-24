import type { CartLine } from "@/context/CartContext";
import { cartMessage } from "./whatsapp";
export const emailUrl=(items:CartLine[])=>`mailto:halimatradingest@gmail.com?subject=${encodeURIComponent("Product Order Enquiry – Halima Trading Website")}&body=${encodeURIComponent(cartMessage(items))}`;

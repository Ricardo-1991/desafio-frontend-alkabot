import { ImgHTMLAttributes } from "react";
import { User } from "@phosphor-icons/react";
import { ContainerGreenBorder, ContainerGrayBorder } from "./style";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}

export function Avatar({ hasBorder = false }: AvatarProps) {
  return (
    <>
      {hasBorder ? (
        <ContainerGreenBorder>
          <User size={32} />
        </ContainerGreenBorder>
      ) : (
        <ContainerGrayBorder>
          <User size={30} />
        </ContainerGrayBorder>
      )}
    </>
  );
}

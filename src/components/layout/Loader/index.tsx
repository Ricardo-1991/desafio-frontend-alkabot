import { LoaderContainer } from "./style";
import spinnerLoading from "../../../assets/spinner.svg";

export function Loader() {
  return (
    <LoaderContainer>
      <img src={spinnerLoading} alt="" />
    </LoaderContainer>
  );
}

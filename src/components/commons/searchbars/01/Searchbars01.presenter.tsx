import {
  Searchbar,
  SearchbarInput,
  SearchOutlinedIcon,
} from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <Searchbar>
      <SearchOutlinedIcon />
      <SearchbarInput
        placeholder="Search Title"
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}

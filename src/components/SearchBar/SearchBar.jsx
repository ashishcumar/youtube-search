import React from "react";
import SearchBarCss from "./SearchBar.module.css";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className={SearchBarCss.navbar}>
          <div className={SearchBarCss.navbar_left}>
            <MenuIcon className={SearchBarCss.menuIcon} fontSize="medium" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuwwDshPfV0oTidRhAeUViKPDimPsY3yzm4knN0Mq7jzy3uAYV6G8HQOPtCprq1l-0g&usqp=CAU"
              alt="youtube icon"
              className={SearchBarCss.ytIcon}
            />

          </div>

          <div className={SearchBarCss.SearchBarContainer}>
            <form onSubmit={this.handleSubmit} className={SearchBarCss.form}>
              <input
                className={SearchBarCss.textField}
                fullwidth="true"
                label="Search..."
                onChange={this.handleChange}
              />
              <span  className={SearchBarCss.lens} > ⌕ </span>
              <MicIcon className={SearchBarCss.searchIcon} />
            </form>
          </div>

          <div className={SearchBarCss.navbar_right}>
            <VideoCallIcon    className={SearchBarCss.navbar_rightIcon} />
            <NotificationsNoneOutlinedIcon 
              className={SearchBarCss.navbar_rightIcon}
            />
            <span className={SearchBarCss.navbar_rightIconCount}> 99+ </span>
            <span className={SearchBarCss.navbar_right_A}> A </span>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;

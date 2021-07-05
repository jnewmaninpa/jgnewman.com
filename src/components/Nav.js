import { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";

import MenuIcon from "@material-ui/icons/Menu";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const useStyles = makeStyles({
    paper: {
      background: "rgb(30,40,50)",
    },
  });
  const styles = useStyles();
  return (
    <nav>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="light-text" />
      </IconButton>
      <Drawer
        classes={{ paper: styles.paper }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {[
            { text: "Home", link: "/" },
            { text: "About", link: "/about" },
            { text: "Projects", link: "/projects" },
            { text: "Contact", link: "/contact" },
          ].map((item, index) => (
            <ListItem button key={item.text}>
              <Link
                className="sidenav-link"
                onClick={() => setOpen(!open)}
                to={item.link}
              >
                {item.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
}

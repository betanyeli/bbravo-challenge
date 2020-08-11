import { makeStyles } from "@material-ui/core/styles";
import Love from "../../Assets/love.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    color: "#fff",
    backgroundColor: '#FD297B',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  infoContent: {
    color: '#e6a7c1a6',
    padding: theme.spacing(8, 0, 6),
    backgroundImage: "url(/static/media/love.13695772.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: '100%',
  },
  infoButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    width: "100%",
    height: "250px",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#FF5864',
    padding: theme.spacing(6),
  },
}));

export default useStyles;

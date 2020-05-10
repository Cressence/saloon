import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '7% auto',
      width: '60%',
      backgroundColor: '#f7f7f7',
    },
    body: {
        backgroundColor: '#ccc',
        width: '100%',
        boxShadow: '5px 10px #888888',
    },
    itemSection: {
        padding: '12px 20px',
    },
    title: {
        color: '#3fb55e',
    },
    home: {
        color: '#3fb55e',
        marginLeft: '3%',
    },
  }));

  export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'left',
      },
      image: {
        marginLeft: '15px',
      },
      heading: {
        paddingLeft: "20px",
      },
      fdiv : {
        marginTop: "100px",
      }
}));
import React,{useRef,useEffect} from 'react'
import { Grid } from '@mui/material'
import Details from "./components/Details/Details"
import Main from './components/Main/Main'
import useStyles from "./styles.js"
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
 
  ErrorPanel
} from "@speechly/react-ui";
const App = () => {

 const classes = useStyles();

  return (
    <div >
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{height : "100vh",gap:"5px"}}>
      <Grid item xs={12} sm={4} className={classes.mobile}>
        <Details title="Income"/>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.main}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.desktop}>
        <Details title="Income"/>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.last}>
        <Details title="Expense"/>
      </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton captureKey=" " />
        {/* <ErrorPanel/> */}
      </PushToTalkButtonContainer>
    </div>
  )
}

export default App
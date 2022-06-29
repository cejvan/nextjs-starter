import { Button, Grid } from "@mui/material"
import { makeStyles } from "@material-ui/core"
import Layout from "../layout/Layout"
import Link from "next/link"

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 1000,
        flexDirection: "column",
    }
}

const useStyles = makeStyles(styles)

const About = () => {

    const classes = useStyles()

    
    return (
        <Layout>
            <div className={classes.container}>
                <h1>Hello About</h1>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={10}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Link href='/'>
                                    <Button color='primary' fullWidth variant="contained" >Home</Button>
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Button color='primary' fullWidth variant="outlined" >Primary</Button>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Button color='primary' fullWidth variant="text" >Primary</Button>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Button color='secondary' fullWidth variant="contained" >secondary</Button>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Button color='secondary' fullWidth variant="outlined" >secondary</Button>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Button color='secondary' fullWidth variant="text" >secondary</Button>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Button color='error' fullWidth variant="contained" >error</Button>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Button color='error' fullWidth variant="outlined" >error</Button>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Button color='error' fullWidth variant="text" >error</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default About
import { Button, Grid, Hidden } from "@mui/material"
import { makeStyles } from "@material-ui/core"
import Layout from "../layout/Layout"
import Link from "next/link"
import { useAtom } from "jotai"
import { userAtom } from "../_atoms/user"
import { useState } from "react"
import BannerCard from "../components/BannerCard"

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 1000,
        flexDirection: "column",
    },
}

const useStyles = makeStyles(styles)

const Index = () => {

    const [user, setUser] = useAtom(userAtom)
    const [loading, setLoading] = useState(false)

    const classes = useStyles()
    return (
        <Layout>
            <div className={classes.container}>
                <Hidden smDown>
                    <img src='/test.svg' alt='test' height={100} width={100} />
                </Hidden>
                <h1 className="test">Hello NextJs</h1>
                <BannerCard />
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={10}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Link href='/about'>
                                    <Button color='primary' fullWidth variant="contained" >About</Button>
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <a href='/about'>
                                    <Button color='primary' fullWidth variant="outlined" >About</Button>
                                </a>
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

export default Index
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ImgCard from './components/ImgCard';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function DiaryGallery() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <ImgCard />
                </Grid>

            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1} direction="row" justify="center" alignItems="flex-start">
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3}>
                        <Grid key={1} item>
                            <ImgCard src="https://i.pinimg.com/originals/0d/d4/15/0dd415c0b4b3a5a51aa2f68faf1030fa.png" />
                        </Grid>
                        <Grid key={2} item>
                            <ImgCard src="https://a.ksd-i.com/a/2017-07-06/96093-523420.jpg" />
                        </Grid>
                        <Grid key={3} item>
                            <ImgCard src="https://cdn2.ettoday.net/images/3769/d3769906.jpg" />
                        </Grid>
                        <Grid key={4} item>
                            <ImgCard src="https://i.ytimg.com/vi/6CmY-LTd_qs/maxresdefault.jpg" />
                        </Grid>
                        <Grid key={5} item>
                            <ImgCard src="https://a.ksd-i.com/a/2019-03-15/114846-715304.png" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
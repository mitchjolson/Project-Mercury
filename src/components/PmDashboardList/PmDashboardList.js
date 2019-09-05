import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PmDashboardList.css';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    table: {
        width: '50%',
        marginLeft: '25%'
    }
})


class PmDashboardList extends Component {

    handleClick = (event) => {
        this.props.history.push(`/pcn-view/${this.props.item.type}/${this.props.item.id}`);
        console.log('clicked handleClick', event);
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <TableRow className="tc" align="center" onClick={() => this.handleClick()}>
                    <TableCell className={classes.tableCell}>{this.props.item.id}</TableCell>
                    {/* <TableCell className={classes.tableCell}>{this.props.item.type}</TableCell> */}
                    <TableCell className={classes.tableCell}>{this.props.item.status}</TableCell>
                    <TableCell className={classes.tableCell}>{this.props.item.date}</TableCell>
                </TableRow>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapStateToProps)(PmDashboardList));

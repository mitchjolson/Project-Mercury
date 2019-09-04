import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchListItem from '../SearchListItem/SearchListItem'

//Material UI imports
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
//table cells information
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

const styles = {
    title:{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'center',
        width: 400,
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 400,
    },
    table:{
        
        width: '80%',
        margin: 'auto',
        
    },
    input: {
        marginLeft: 8,
        display: 'center',
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
  };

class Search extends Component {
    

    // state = {
    //     search: '',
    // }


    componentDidMount(){
        this.props.dispatch({type:'FETCH_PCN_LIST'});
        // this.props.dispatch({type: 'GET_SEARCH'});
    }
    //takes the input information and holds it in the new setState.
    handleChange = (event) =>{
        console.log('entered search', event.target.value.toUpperCase());
        // this.setState({
        //     [propertyToChange]:event.target.value,
        // })
        this.props.dispatch({type:'GET_SEARCH', payload: event.target.value})
        // console.log(this.state.search);
    };

  
    render() {

        const { classes } = this.props;

        return(
            <>
            <h1 className={classes.title}>Search</h1>
        <Paper className={classes.root} elevation={1}>
            <IconButton className={classes.iconButton} aria-label="Menu">
            </IconButton>
            <InputBase className={classes.input} placeholder="Search" onChange={(event) => this.handleChange(event)} />
            <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
            </IconButton>
        </Paper>

        <Paper className={classes.table} elevation={1}>
        <h2 className={classes.title}>Results</h2> 
            <Table className={classes.table}>
            <TableHead>
                <TableRow component="tr" scope="row">
                    <TableCell className={classes.tableCell}>PCN - #</TableCell>
                    <TableCell className={classes.tableCell}>type</TableCell>
                    <TableCell className={classes.tableCell}>Date</TableCell>
                    <TableCell className={classes.tableCell}>Description</TableCell>
                </TableRow>
            </TableHead>  
                <TableBody>
                    {this.props.reduxStore.getPcn.map(item => 
                    <SearchListItem  key={item.id} item={item}/>)}
                </TableBody>
            </Table> 
      </Paper>
            </>
        )
    }
}


const mapStateToProps = reduxStore =>({
    reduxStore 

});

export default withStyles(styles)(connect(mapStateToProps)(Search));

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  colorSwitchBase: {
    color: "#c4c4c4",
    "& + $colorBar": {
      backgroundColor: "#ffffff",
      border: "1px solid #3E3C41",
      opacity: 1,
      width: "100%",
    },
    "&$colorChecked": {
      color: "#FFA800",
      position: "relative",
      left: "30px",
      "& + $colorBar": {
        backgroundColor: "#FCDC90",
        opacity: 1,
      }
    }
  },
  icon: {
    marginTop: '2px',
  },
  colorBar: {},
  colorChecked: {},
  label: {
    color: "#fff"
  }
});

class CustomizedSwitches extends React.Component {
  state = {
    checkedA: true,
    checkedB: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes, label } = this.props;
  
    const types = [
      {
        name: 'second-class',
        value: 'купе'
      },
      {
        name: 'third-class',
        value: 'плацкарт'
      },
      {
        name: 'first-class',
        value: 'люкс'
      },
      {
        name: 'fourth-class',
        value: 'сидячий'
      },
      {
        name: 'express',
        value: 'экспресс'
      },
      {
        name: 'wi-fi',
        value: 'wi-fi'
      },
    ];
    const getSeatType = (type) => {
      const res = types.find(el => el.value === type.toLowerCase()).name;
      return res;
    }
    return (
      <div  >
       {/*  <label style={{color: "#fff"}}>Купе</label> */}
      <FormGroup row >
      <FormControlLabel
          style={{width: '80%', "justifyContent": "space-between", "color": "#ffffff"}}
          classes={{label: label}}
          label={<label className={"switches_label " + getSeatType(label)} style={{color: "#fff", marginRight: '1rem'}}>{label}</label>}
          labelPlacement="start"
          control={
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChange("checkedA")}
              value="checkedA"
              classes={{
                switchBase: classes.colorSwitchBase,
                checked: classes.colorChecked,
                bar: classes.colorBar,
                icon: classes.icon
              }}
            />
          }
        />
      </FormGroup>
            </div>

    );
  }
}

CustomizedSwitches.propTypes = {
  classes: PropTypes.object.isRequired
};

const CustomSwitch =  withStyles(styles)(CustomizedSwitches);

export default () => {
  return (
    <div>
    <CustomSwitch label="Купе"/>
    <CustomSwitch label="Плацкарт"/>
    <CustomSwitch label="Сидячий"/>
    <CustomSwitch label="Люкс"/>
    <CustomSwitch label="Экспресс"/>
    <CustomSwitch label="Wi-Fi"/>
    </div>
  )
}


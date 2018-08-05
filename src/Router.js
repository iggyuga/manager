import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="login" 
					component={LoginForm}
					title="Please Login" 
					navigationBarStyle={styles.navBar}
					titleStyle={styles.headerStyle}initial 
				/>
				<Scene key="employeeList"
					component={EmployeeList}
					title="Employees" 
				/>
			</Scene>
		</Router>
	);
};


const styles = {
	navBar: {
	  backgroundColor: '#8000ff', // changing navbar color
	},
	headerStyle: {
		flex: 1,
		flexDirection: 'row',
		textAlign: 'center'
	}
};

export default RouterComponent;
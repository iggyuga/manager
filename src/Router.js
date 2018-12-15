import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';



const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" 
						component={LoginForm}
						title="Please Login" 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.headerStyle}
						initial 
					/>
				</Scene>
				<Scene key="main">
					<Scene 
						key="employeeList"
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						component={EmployeeList}
						title="Employees" 
						initial
					/>
					<Scene
						key="employeeCreate"
						title="Create Employee"
						component={EmployeeCreate}
					/>
				</Scene>
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
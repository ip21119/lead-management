import React,{Component}  from 'react';
import Main from 'layouts/main'
import { Layout } from 'antd';
import { withAuthSync } from 'utils/auth'
import { i18n, withNamespaces } from '../i18n'
import {connect} from 'react-redux';
const { Content } = Layout;

class App extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }
  render() {
    const {user, permissions} = this.props;
     return <Main user={user} permissions = {permissions}>
            {this.props.t('title')};
            <button
              type='button'
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'guj' : 'en')}
            >
              Change Local
            </button>
        </Main>
      
    
  }
}
function mapStateToProps(state) {
  return {
      user: state.session.user,
      permissions: state.session.permissions
  };
}
export default connect(mapStateToProps)(withAuthSync(withNamespaces('common')(App)))
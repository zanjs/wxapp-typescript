import { connect } from 'wechat-weapp-redux';

import BasePage from '../base';
import { Actions } from '../../redux/modules/user';

const app = getApp();

const mapStateToData = state => ({
  user: state.user,
});

const mapDispatchToPage = dispatch => ({
  login: () => dispatch(Actions.login()),
});



class IndexPage extends BasePage {
  login: () => void
  data = {
    motto: 'Hello',
    user: null,
  }

  bindViewTap(): void {
     console.log(11)
  }

  handleCheck( e ) {
    const id = parseInt( e.target.id )
    console.log(id)
  }

  onLoad() {
    this.login();
    console.log(this)
    // this.bindViewTap()

  }
}

Page(connect(mapStateToData, mapDispatchToPage)(new IndexPage()));

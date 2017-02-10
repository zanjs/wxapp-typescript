import { Observable } from 'rxjs/Observable';
import { Actions } from '../modules/user';
import api from '../../net/api';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/merge'

export default action$ =>
  action$.ofType(`${Actions.login}`)
    .mergeMap(() => Observable.create((subscriber) => {
      wx.login({
        success: ({ code }) => {
          wx.getUserInfo({
            success: ({ userInfo }) => {
              subscriber.next({ code, userInfo });
              subscriber.complete();
            },
          });
        },
      })
    })).mergeMap(({ code, userInfo }) => Observable.merge(
      Observable.of(Actions.userInfo(userInfo)),
      api.post('/post', { code })
        .map(response => Actions.loginSuccess(response))
        .catch(error => Observable.of(Actions.loginFailure(error)))
    ));
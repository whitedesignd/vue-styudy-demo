import Vue from 'vue'
import 'mint-ui/lib/style.css'
import {Header,Button,Tabbar,TabItem,Swipe,SwipeItem}  from 'mint-ui'
import { Badge} from 'mint-ui';
import { CellSwipe } from 'mint-ui';

Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Badge.name, Badge);
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component(Tabbar.name,Tabbar);
Vue.component(TabItem.name,TabItem);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
import io from 'socket.io-client';
import { server_url} from './constants'

const socket = io(server_url);
export default socket;

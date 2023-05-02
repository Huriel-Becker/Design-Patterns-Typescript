import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlControlWithVolume,
): void {
  abstraction.togglePower(); // true

  // Type Guard

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 40
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlControlWithVolume(tv);
clientCode(tvRemoteControl);

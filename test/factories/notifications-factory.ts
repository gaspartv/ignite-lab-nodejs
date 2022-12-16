/* eslint-disable prettier/prettier */
import { Content } from '@application/entities/content';
import {
  iNotificationProps,
  Notification,
} from '@application/entities/notification';

type Override = Partial<iNotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}

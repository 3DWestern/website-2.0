
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { event } from '@/components/data/events';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventModalProps {
  event: event | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>{event.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={16} />
                <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>{event.location}</span>
            </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Back</Button>
          </DialogClose>
          <Button>Register</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

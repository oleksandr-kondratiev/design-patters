"use client";

import React from "react";
import { toast } from "sonner";

// components
import { Button } from "@/components/ui/button";

interface State {
  play: () => void;
  pause: () => void;
  stop: () => void;
}

class PlayingState implements State {
  constructor(private player: MediaPlayer) {}

  play(): void {
    toast.error("Already playing");
  }

  pause(): void {
    toast.success("Pausing the player");
    this.player.setState(this.player.pausedState);
  }

  stop(): void {
    toast.success("Stopping the player");
    this.player.setState(this.player.stoppedState);
  }
}

class StoppedState implements State {
  constructor(private player: MediaPlayer) {}

  play(): void {
    toast.success("Starting the player");
    this.player.setState(this.player.playingState);
  }

  pause(): void {
    toast.error("Cannot pause. Player is stopped");
  }

  stop(): void {
    toast.error("Already stopped");
  }
}

class PausedState implements State {
  constructor(private player: MediaPlayer) {}

  play(): void {
    toast.success("Resuming the player");
    this.player.setState(this.player.playingState);
  }

  pause(): void {
    toast.error("Already paused");
  }

  stop(): void {
    toast.success("Stopping the player");
    this.player.setState(this.player.stoppedState);
  }
}

class MediaPlayer {
  public playingState: State;
  public pausedState: State;
  public stoppedState: State;

  private currentState: State;

  constructor() {
    this.playingState = new PlayingState(this);
    this.pausedState = new PausedState(this);
    this.stoppedState = new StoppedState(this);
    this.currentState = this.stoppedState;
  }

  setState(state: State): void {
    this.currentState = state;
  }

  play(): void {
    this.currentState.play();
  }

  pause(): void {
    this.currentState.pause();
  }

  stop(): void {
    this.currentState.stop();
  }
}

export const State = () => {
  const player = new MediaPlayer();

  return (
    <div className="w-full flex justify-between gap-4">
      <Button
        className="w-full"
        onClick={() => player.play()}
        variant="default"
      >
        Play
      </Button>
      <Button
        className="w-full"
        onClick={() => player.pause()}
        variant="secondary"
      >
        Pause
      </Button>
      <Button
        className="w-full"
        onClick={() => player.stop()}
        variant="destructive"
      >
        Stop
      </Button>
    </div>
  );
};

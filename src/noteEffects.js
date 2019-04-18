
var noteEffects = {};
noteEffects.container = [];

function NoteEffect(t) {
  this.x = t.x;
  this.y = t.y;
  this.xv = t.xv;
  this.yv = t.yv;
  this.spawnTime = time;
  this.alive = true;
}

NoteEffect.prototype.update = function(dt) {
  this.x += this.xv*dt;
  this.y += this.yv*dt;
  if (time - this.spawnTime > 1) {
    this.alive = false;
  }
}

NoteEffect.prototype.draw = function() {
  push();
  translate(round(this.x), round(this.y))
  let frame = floor((time - this.spawnTime)*5) % 4;
  let w = 25, h = 30;
  image(gfx.noteSheet, -7, -22, w, h, frame*w, 0, w, h);
  // fake opacity tint
  let t = constrain((time - this.spawnTime)*2 - 1, 0, 1);
  fill(34, 32, 52, t*255);
  rect(-7, -22, w, h);
  pop();
}


noteEffects.new = function(t) {
  let v = new NoteEffect(t);
  noteEffects.container.push(v);
  return v;
}

noteEffects.update = function(dt) {
  for (let i=0; i < noteEffects.container.length; i++) {
    let v = noteEffects.container[i];
    v.update(dt);
  }
  noteEffects.container = noteEffects.container.filter(function(v) {
    return v.alive;
  });
}

noteEffects.draw = function() {
  for (let i=0; i < noteEffects.container.length; i++) {
    let v = noteEffects.container[i];
    v.draw();
  }
}
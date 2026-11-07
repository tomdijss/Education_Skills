# How training works: resources

## Knowledge

- [Book: _Neural Networks and Deep Learning_, Michael Nielsen](http://neuralnetworksanddeeplearning.com/chap1.html)
  Free book. Chapter 1 defines the quadratic cost and the update `v → v − η∇C`: step each parameter a small amount opposite the slope of the cost. Use for: what a training step is, and why the loss has to be a smooth number rather than "number of correct answers."
- [Course: Neural Networks: Zero to Hero, Andrej Karpathy](https://karpathy.ai/zero-to-hero.html)
  A programmer's path from a blank notebook to a trained network, then on to a small GPT. Lecture 1 assumes Python and a vague memory of high-school calculus. Use for: building the training loop in code. The lecture is 2h25m; do not assign it whole inside a ten-minute lesson.
- [Code: micrograd](https://github.com/karpathy/micrograd)
  About 100 lines for the gradient engine and about 50 for a tiny network. Use for: the eventual reading of a real training step once the direction of an update is familiar.
- [Course: Practical Deep Learning for Coders, fast.ai](https://course.fast.ai/)
  Top-down: you train a real model early, and the machinery is explained afterwards. Use for: the fine-tuning half of the mission, after the single-step idea is solid.

## Wisdom (Communities)

- [fast.ai forums](https://forums.fast.ai/)
  Practical training discussion attached to the fast.ai course. Quieter than it was, and spam shows up; the older threads on actually training models are still the useful part. Use for: a training run that misbehaves once you are writing code.
- [Hugging Face forums](https://discuss.huggingface.co/)
  Where people fine-tune models someone else already trained. Use for: the fine-tuning stage of the mission, not the first lessons.

## Gaps

- A primary source that is itself about ten minutes and stays on one weight, one example, and the sign of the update. Nielsen's section is the right argument and a longer read. Karpathy's lecture is the right code and a long sitting. The lessons have to cover that gap until a tighter source turns up.

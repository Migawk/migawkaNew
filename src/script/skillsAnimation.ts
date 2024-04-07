const doc = document;

const sleep = (wait: number) => new Promise((res) => setTimeout(res, wait));

export async function frontEnd() {
  const typewriter = doc.getElementById('typewriter');
  if (!typewriter) return;
  const pointer = doc.getElementById('frontEndPointerAnimation')!;
  const rawLetters = typewriter.children[0].children;
  const letters: HTMLElement[] = [];

  if (pointer.getAnimations().length) return;

  for (let i = 1; i <= rawLetters.length - 1; i++) {
    // Skipping over pointer that is the first in the list.
    letters.push(rawLetters[i] as HTMLElement);
  }

  typewriter.animate(
    {
      transform: 'translate(-80%, -60%) scale(.6)'
    },
    { duration: 1700, fill: 'forwards' }
  );
  pointer.style.transform = 'translate(0, 0)';

  pointer.animate(
    {
      opacity: '1'
    },
    {
      duration: 200,
      fill: 'forwards'
    }
  );

  pointer.animate(
    {
      transform: 'translateX(105px)'
    },
    {
      duration: 1800,
      fill: 'forwards'
    }
  );
  letters.forEach(async (letter, ind) => {
    await sleep(130 * ind);

    letter.animate(
      {
        opacity: '1'
      },
      { duration: 130 * ind * 0.1, fill: 'forwards' }
    );
    letter.animate(
      {
        transform: `translate(0, -2px)`
      },
      {
        duration: 130 * ind,
        fill: 'forwards'
      }
    );
  });

  await sleep(3000);
  letters.reverse().forEach(async (letter, ind) => {
    await sleep(130 * ind);
    letter.animate(
      {
        opacity: '0'
      },
      {
        easing: 'ease-in',
        duration: 130 * ind * 0.1,
        fill: 'forwards'
      }
    );
    await sleep(120);
    // letter.style.transform = 'translate(0, 0)';
  });

  await sleep(100);
  pointer.animate(
    {
      transform: 'translateX(-7px)'
    },
    {
      duration: 2100,
      fill: 'forwards'
    }
  );

  await sleep(2100);
  letters.map((l) => l.getAnimations().map((a) => a.cancel()));
  pointer.getAnimations().map((a) => a.cancel());
  typewriter.getAnimations().map((a) => a.cancel());
}

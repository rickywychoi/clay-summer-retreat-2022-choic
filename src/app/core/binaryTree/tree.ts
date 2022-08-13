import { Node } from './types';
import { setNodeUniqueKey } from './utils';

const example = (): Node => {
  //
  //            base
  //           /    \
  //         L        R
  //       /  \      /  \
  //      LL   LR   RL  RR
  //     / \   / \
  //  LLL LLR LRL LRR
  //
  const root = new Node('root', { todo: '', place: 'place' });
  root.left = new Node('L', { todo: '', place: 'place' });
  root.right = new Node('R', { todo: '', place: 'place' });
  root.left.left = new Node('LL', { todo: '', place: 'place' });
  root.left.right = new Node('LR', { todo: '', place: 'place' });
  root.right.left = new Node('RL', { todo: '', place: 'place' });
  root.right.right = new Node('RR', { todo: '', place: 'place' });
  root.left.left.left = new Node('LLL', { todo: '', place: 'place' });
  root.left.left.right = new Node('LLR', { todo: '', place: 'place' });
  root.left.right.left = new Node('LRL', { todo: '', place: 'place' });
  root.left.right.right = new Node('LRR', { todo: '', place: 'place' });
  setNodeUniqueKey(root);
  return root;
};

const real = (): Node => {
  /**
   * root
   */
  const root = new Node('root', { todo: '', place: 'place' }, '어디로 가시겠습니까?');
  /**
   * height 1
   */
  root.left = new Node('실내', { todo: '말씀 읽기를 하세요.', place: '본당' }, '다시 한번 어디로 가시겠습니까?');
  root.right = new Node('실외', { todo: '피구를 하세요.', place: 'Gym' }, '무엇을 마시겠습니까?');
  /**
   * height 2
   */
  root.left.left = new Node('실내', { todo: '말씀 읽기를 하세요.', place: '본당' });
  root.left.right = new Node('실외', { todo: '피구를 하세요.', place: 'Gym' });
  root.right.left = new Node('물', { todo: '하이킹을 떠나세요.', place: 'Thaletel Trail (Lexw Qwo:m Park)' });
  root.right.right = new Node('주스', { todo: '로프 코스를 하세요.', place: '로프 코스' });
  /**
   * height 3
   */
  root.left.left.left = new Node(
    '좌우',
    { todo: 'Archery를 하세요.', place: '로프 코스 옆' },
    '누구의 삶을 선택하시겠습니까?'
  );
  root.left.left.right = new Node(
    '상하',
    { todo: '단체 줄넘기를 하세요.', place: 'Gym' },
    '어느 시대로 시간 여행을 가시겠습니까?'
  );
  root.left.right.left = new Node(
    '혼자 있는 것',
    {
      todo: '헤쳐있다가 고깔모자 쓰고 다시 모이기를 하세요.',
      place: 'Gym'
    },
    '누구의 삶을 선택하시겠습니까?'
  );
  root.left.right.right = new Node(
    '그룹과 같이 있는 것',
    { todo: '로프 코스를 하세요.', place: '로프 코스' },
    '어느 시대로 시간 여행을 가시겠습니까?'
  );
  root.right.right.left = new Node(
    '좌우',
    { todo: 'Archery를 하세요.', place: '로프 코스 옆' },
    '누구의 삶을 선택하시겠습니까?'
  );
  root.right.right.right = new Node('상하', { todo: 'Climbing Tower로 가세요.', place: 'Climbing Tower' });
  /**
   * 간식 타임
   */
  /**
   * height 4
   */
  root.left.left.left.left = new Node('다니엘', { todo: '단체 사진을 찍어오세요.', place: '야외' });
  root.left.left.left.right = new Node('바울', {
    todo: '놀이터로 가서 술래 한명을 정한다음, 술래가 고깔모자를 쓰고 놀이터에 흩어져있는 멤버들을 찾아오세요.',
    place: '놀이터'
  });
  root.left.left.right.left = new Node('고구려 + 조선', { todo: 'Archery를 하세요.', place: '로프 코스 옆' });
  root.left.left.right.right = new Node('백제 + 신라', { todo: 'Climbing Tower로 가세요.', place: 'Climbing Tower' });
  root.left.right.left.left = new Node('다니엘', { todo: '단체 사진을 찍어오세요.', place: '야외' });
  root.left.right.left.right = new Node(
    '요나',
    {
      todo: '수영장으로 가서 고깔모자를 쓰고 물총으로 수영장 위에 있는 물건들을 맞추기를 하세요.',
      place: '수영장'
    },
    '어떤 동물의 삶을 선택하시겠습니까?'
  );
  root.left.right.right.left = new Node('고구려 + 조선', { todo: 'Archery를 하세요.', place: '로프 코스 옆' });
  root.left.right.right.right = new Node('백제 + 신라', { todo: 'Climbing Tower로 가세요.', place: 'Climbing Tower' });
  root.right.right.left.left = new Node(
    '요나',
    {
      todo: '수영장으로 가서 고깔모자를 쓰고 물총으로 수영장 위에 있는 물건들을 맞추기를 하세요.',
      place: '수영장'
    },
    '어떤 동물의 삶을 선택하시겠습니까?'
  );
  root.right.right.left.right = new Node('바울', {
    todo: '놀이터로 가서 술래 한명을 정한다음, 술래가 고깔모자를 쓰고 놀이터에 흩어져있는 멤버들을 찾아오세요.',
    place: '놀이터'
  });
  root.right.right.right.left = new Node('좌우', { todo: 'Archery를 하세요.', place: '로프 코스 옆' });
  root.right.right.right.right = new Node(
    '상하',
    { todo: '단체 줄넘기를 하세요.', place: 'Gym' },
    '누구의 삶을 선택하시겠습니까?'
  );
  /**
   * height 5
   */
  root.left.left.left.left.left = new Node('첫인상', {
    todo: '수련회 조 멤버들 첫인상으로 칭찬 써주기를 하세요.',
    place: '본당'
  });
  root.left.left.left.left.right = new Node('끝인상', {
    todo: '자신의 CLAY 반 선생님과 친구들에게 편지를 써주세요.',
    place: '본당'
  });
  root.left.left.left.right.left = new Node('외로움', {
    todo: 'Gym으로 가서 헤쳐있다가 고깔모자 쓰고 다시 모이기를 하세요.',
    place: 'Gym'
  });
  root.left.left.left.right.right = new Node('아픔', {
    todo: '2~3분짜리 스킷을 만들어서 조 선생님과 영재쌤께 보여드리기를 하세요.',
    place: '본당'
  });
  root.left.left.right.left.left = new Node('스마트폰', { todo: '단체 사진을 찍어오세요.', place: '야외' });
  root.left.left.right.left.right = new Node('TV', {
    todo: '2~3분짜리 스킷을 만들어서 조 선생님과 영재쌤께 보여드리기를 하세요.',
    place: '본당'
  });
  root.left.left.right.right.left = new Node('외로움', {
    todo: 'Gym으로 가서 헤쳐있다가 고깔모자 쓰고 다시 모이기를 하세요.',
    place: 'Gym'
  });
  root.left.left.right.right.right = new Node('아픔', {
    todo: '2~3분짜리 스킷을 만들어서 조 선생님과 영재쌤께 보여드리기를 하세요.',
    place: '본당'
  });
  root.left.right.left.left.left = new Node('첫인상', {
    todo: '수련회 조 멤버들 첫인상으로 칭찬 써주기를 하세요.',
    place: '본당'
  });
  root.left.right.left.left.right = new Node('끝인상', {
    todo: '자신의 CLAY 반 선생님과 친구들에게 편지를 써주세요.',
    place: '본당'
  });
  root.left.right.left.right.left = new Node('돌고래', {
    todo: '수영장으로 가서 스펀지로 물 옮기기를 하세요.',
    place: '수영장'
  });
  root.left.right.left.right.right = new Node('펭귄', {
    todo: '수영장으로 가서 자유시간(물놀이)을 만끽하세요.',
    place: '수영장'
  });
  root.left.right.right.left.left = new Node('긴 것', { todo: '단체 줄넘기를 하세요.', place: 'Gym' });
  root.left.right.right.left.right = new Node('짧은 것', {
    todo: '고깔모자 쓰고 림보하기를 하세요.',
    place: 'Gym'
  });
  root.left.right.right.right.left = new Node('첫인상', {
    todo: '수련회 조 멤버들 첫인상으로 칭찬 써주기를 하세요.',
    place: '본당'
  });
  root.left.right.right.right.right = new Node('끝인상', {
    todo: '자신의 CLAY 반 선생님과 친구들에게 편지를 써주세요.',
    place: '본당'
  });
  root.right.right.left.left.left = new Node('돌고래', {
    todo: '수영장으로 가서 스펀지로 물 옮기기를 하세요.',
    place: '수영장'
  });
  root.right.right.left.left.right = new Node('펭귄', {
    todo: '수영장으로 가서 자유시간(물놀이)을 만끽하세요.',
    place: '수영장'
  });
  root.right.right.left.right.left = new Node('스마트폰', {
    todo: '단체 사진을 찍어오세요.',
    place: '야외'
  });
  root.right.right.left.right.right = new Node('TV', {
    todo: '2~3분짜리 스킷을 만들어서 조 선생님과 영재쌤께 보여드리기를 하세요.',
    place: '야외'
  });
  root.right.right.right.left.left = new Node('첫인상', {
    todo: '수련회 조 멤버들 첫인상으로 칭찬 써주기를 하세요.',
    place: '본당'
  });
  root.right.right.right.left.right = new Node('끝인상', {
    todo: '자신의 CLAY 반 선생님과 친구들에게 편지를 써주세요.',
    place: '본당'
  });
  root.right.right.right.right.left = new Node('요나', {
    todo: '수영장으로 가서 고깔모자를 쓰고 물총으로 수영장 위에 있는 물건들을 맞추기를 하세요.',
    place: '수영장'
  });
  root.right.right.right.right.right = new Node('바울', {
    todo: '놀이터로 가서 술래 한명을 정한다음, 술래가 고깔모자를 쓰고 놀이터에 흩어져있는 멤버들을 찾아오세요.',
    place: '놀이터'
  });
  setNodeUniqueKey(root);
  return root;
};

const trees: Node[] = [example(), real()];

const tree = (): Node => trees[0];

export { tree };

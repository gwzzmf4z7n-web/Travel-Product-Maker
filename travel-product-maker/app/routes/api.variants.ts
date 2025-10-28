import { json } from '@remix-run/node';
import type { ActionFunctionArgs } from '@remix-run/node';
import { authenticate } from '~/shopify.server';

// This route handles variant management actions (add, update, delete).
// It expects a JSON body with an `action` field specifying the operation.
// For example: { "action": "add", "productId": "...", ... }

export const action = async ({ request }: ActionFunctionArgs) => {
  // authenticate admin session
  const { admin } = await authenticate.admin(request);

  const body = await request.json();
  const { action: variantAction, productId, variantId, tier, ageGroup, duration, addon } = body;

  // Placeholder GraphQL calls: you'll need to implement actual Shopify Admin API calls here.
  switch (variantAction) {
    case 'add':
      // TODO: call productVariantsCreate with inputs based on tier, ageGroup, duration, addon
      break;
    case 'update':
      // TODO: call productVariantUpdate with variantId and updated fields
      break;
    case 'delete':
      // TODO: call productVariantsBulkDelete with variantId(s)
      break;
    default:
      return json({ error: 'Invalid action' }, { status: 400 });
  }

  return json({ success: true });
};
